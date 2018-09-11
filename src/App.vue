<template>
  <v-app id="inspire">
    <v-content>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Mimerslunden</v-toolbar-title>
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
      if (window.innerHeight > window.innerWidth) {
        this.landscape = false;
      } else {
        this.landscape = true;
      }
    }
  },

  mounted() {
    const orientation =
      screen.msOrientation ||
      (screen.orientation || screen.mozOrientation || {}).type;

    if (
      orientation === "portrait-secondary" ||
      orientation === "portrait-primary"
    ) {
      this.landscape = false;
    } else {
      this.landscape = true;
    }

    window.onresize = event => {
      this.applyOrientation();
    };
  }
};
</script>