<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card>
          <v-card-title class="dense">
            <v-btn color="success" class="white--text">
              <v-icon left dark>mdi-plus</v-icon>Add user
            </v-btn>
            <v-spacer></v-spacer>
            <v-flex lg3 md3 sm4 xs6>
              <v-text-field
                v-model="search"
                label="Search"
                append-icon="mdi-magnify"
                color="purple"
              ></v-text-field>
            </v-flex>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="items"
            :loading="true"
            :search="search"
            :pagination.sync="pagination"
            hide-actions
            class="custom-data-table"
          >
            <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>

            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
              <td class="justify-center px-0 center">
                <!-- <v-btn small dark color="primary">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn small dark color="danger">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn small dark color="warning">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>-->
                <v-btn
                  color="primary"
                  class="table-action-button"
                  icon
                  @click="editItem(props.item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn color="danger" class="table-action-button" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn color="warning" class="table-action-button" icon>
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn color="success" class="table-action-button" icon>
                  <v-icon>mdi-download</v-icon>
                </v-btn>
                <!-- <v-icon small class="mr-2" @click="deleteItem(props.item)">mdi-delete</v-icon> -->
                <!-- <v-icon small class="mr-2" @click="deleteItem(props.item)">mdi-eye</v-icon> -->
              </td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-layout align-center justify-center>
              <v-flex lg1 md1 sm1 xs1>
                <div>សរុប 100</div>
              </v-flex>
              <v-flex lg1 md2 sm1 xs1>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" flat dark v-on="on">10/ទំព័រ
                      <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-tile v-for="(limit, index) in limits" :key="index">
                      <v-list-tile-title>{{ limit.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-flex>
              <v-flex lg8 md6 sm8 xs8>
                <v-pagination v-model="pagination.page" :length="100" :total-visible="7"></v-pagination>
              </v-flex>
              <v-flex lg2 md3 sm2 xs2>
                <v-text-field label="ទៅកាន់" :value="2"></v-text-field>
              </v-flex>
            </v-layout>
          </div>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    search: "",
    pagination: {},
    limits: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ],
    headers: [
      {
        sortable: true,
        text: "Name",
        value: "name"
      },
      {
        sortable: false,
        text: "Country",
        value: "country"
      },
      {
        sortable: false,
        text: "City",
        value: "city"
      },
      {
        sortable: false,
        text: "Salary",
        value: "salary"
      },
      { text: "Actions", sortable: false }
    ],
    items: [
      {
        name: "Dakota Rice",
        country: "Niger",
        city: "Oud-Tunrhout",
        salary: "$35,738"
      },
      {
        name: "Minerva Hooper",
        country: "Curaçao",
        city: "Sinaai-Waas",
        salary: "$23,738"
      },
      {
        name: "Sage Rodriguez",
        country: "Netherlands",
        city: "Overland Park",
        salary: "$56,142"
      },
      {
        name: "Philip Chanley",
        country: "Korea, South",
        city: "Gloucester",
        salary: "$38,735"
      },
      {
        name: "Doris Greene",
        country: "Malawi",
        city: "Feldkirchen in Kārnten",
        salary: "$63,542"
      },
      {
        name: "Mason Porter",
        country: "Chile",
        city: "Gloucester",
        salary: "$78,615"
      }
    ]
  }),
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  }
};
</script>
