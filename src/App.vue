<template>
  <v-app id="inspire">
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Adminläge</v-card-title>
        <v-card-text>
          Skriv lösen för att låsa upp admin läge
          <v-text-field v-model="passwordInput" type="password" label="Lösen" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat="flat" @click="dialog = false">Avbryt</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="unlock">Låsupp</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="add" max-width="400">
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="address" :rules="addressRules" label="Adress" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field v-model="amount" type="number" :rules="[v => !!v || 'Fyll i belopp']" label="Belopp" required></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                    <v-text-field slot="activator" v-model="date" label="Datum" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="clear">Rensa</v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" @click="submit">
              Spara
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-content>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Mimerslunden</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="adminUnlocked" color="primary" @click="add = ! add">Lägg till betalningar</v-btn>
        <v-btn v-if="! adminUnlocked" color="primary" @click="dialog = ! dialog">Låsupp</v-btn>
      </v-toolbar>
      <v-alert :value="! landscape" color="error" transition="fade-transition">
        Listan ses bäst om du har mobilen i liggande läge
      </v-alert>
      <v-card>
        <v-card-title>
          Inbetalningar
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="search" label="Sök" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="records" :search="search" no-data-text="Finns inga rader skapade">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.address }}</td>
            <td class="text-xs-left">{{ props.item.amount }} kr</td>
            <td class="text-xs-left">{{ props.item.date }}</td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Din sökning på "{{ search }}" gav inga resultat.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import { recordRef } from "./firebase";

export default {
  data: () => ({
    menu: false,
    date: null,
    add: false,
    valid: true,
    name: "",
    address: "",
    amount: "",
    nameRules: [v => !!v || "Namn måste fyllas i"],
    email: "",
    addressRules: [v => !!v || "Måste finnas en adress"],
    password: "skolgatan",
    passwordInput: "",
    adminUnlocked: true,
    dialog: false,
    drawer: null,
    landscape: false,
    search: "",
    headers: [
      {
        text: "Namn",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Adress", value: "address", align: "left" },
      { text: "Belopp", value: "amount", align: "left" },
      { text: "Inbetalningsdatum", value: "date", align: "left" }
    ],
    desserts: [
      {
        value: false,
        name: "Hannes och Anna",
        address: "Skolgatan 7",
        amount: 50,
        date: "2018-01-01"
      },
      {
        value: false,
        name: "Tobbe och Cissi",
        address: "Skolgatan 16",
        amount: 50,
        date: "2018-01-02"
      }
    ]
  }),

  props: {
    source: String
  },

  firebase: {
    records: recordRef
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        recordRef
          .push({
            name: this.name,
            address: this.address,
            amount: this.amount,
            date: this.date
          })
          .then(res => {
            this.clear();
            this.add = false;
          });
      }
    },
    clear() {
      this.$refs.form.reset();
    },

    save() {
      recordRef.push({
        name: "Test",
        address: "Skolgatan",
        amount: 50,
        date: "2018-01-01"
      });
    },

    list() {},

    applyOrientation() {
      if (window.innerHeight < window.innerWidth) {
        this.landscape = true;
      }
    },

    unlock() {
      if (this.passwordInput === this.password) {
        this.adminUnlocked = true;
        this.dialog = false;
      }
    }
  },

  mounted() {
    window.onresize = event => {
      this.applyOrientation(event);
    };
  }
};
</script>