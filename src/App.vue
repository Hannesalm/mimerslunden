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
    <v-content>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Mimerslunden</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="adminUnlocked" color="primary">Lägg till betalningar</v-btn>
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
        <v-data-table :headers="headers" :items="desserts" :search="search">
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
export default {
  data: () => ({
    password: "skolgatan",
    passwordInput: "",
    adminUnlocked: false,
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

  methods: {
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