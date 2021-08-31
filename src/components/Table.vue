<template>
  <div>
    <table>
      <thead>
        <tr>
          <td class="ftd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span class="spt">ID</span>
          </td>
          <td class="fv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="spt">Имя</span>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-at-sign"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
            </svg>
            <span class="spt">Email</span>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-alert-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span class="spt">Статус</span>
          </td>
          <td class="ltd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-stop-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <rect x="9" y="9" width="6" height="6"></rect>
            </svg>
            <span class="spt">Действия</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="elem in tableList" :key="elem">
          <td class="ftd dot">{{ elem.id }}</td>
          <td>{{ elem.name }}</td>
          <td>{{ elem.email }}</td>
          <td v-if="elem.status">Активен</td>
          <td v-if="!elem.status">Заблокирован</td>
          <td class="ltd" :elemId="elem.id">
            <popupMenu />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import popupMenu from "./PopupMenu.vue";
export default {
  components: {
    popupMenu,
  },
  props: {
    tableWhere: String,
  },
  computed: {
    tableList() {
      let tableList = JSON.parse(localStorage.getItem(this.tableWhere));
      return tableList;
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
thead {
  color: #5a5b5d;
}
td {
  font-weight: 500;
  padding: 10px;
  border: 1px solid #5a5b5d;
}
.ftd,
.ltd {
  border-left: none;
  border-right: none;
}
.dot {
  color: #3680ec;
  text-decoration: underline dotted #3680ec;
  text-decoration-thickness: 2.5px;
}
tr td svg {
  color: #5a5b5d;
  transform: translateY(3px);
}
.spt {
  margin-left: 10px;
}
</style>
