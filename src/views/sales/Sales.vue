<template>
  <div class="full__menu">
    <div class="full__menu-header">
      <h2>Продажи</h2>
    </div>
    <div class="full__menu-form">
      <div class="full__menu-form-input">
        <input class="menu-input" type="date" placeholder="ДД.ММ.ГГ">
      </div>
      <div class="full__menu-form-types">
            <b-form-select v-model="selected" :options="options_for_race" size="sm" class="menu-race mt-3"></b-form-select>
            <input type="time" class="menu-time mt-3">
            <b-form-select v-model="selected" :options="options_for_car" size="sm" class="menu-car mt-3"></b-form-select>
            <b-form-select v-model="selected" :options="options_for_free" size="sm" class="menu-free mt-3"></b-form-select>
            <b-form-select v-model="selected" :options="options_for_status" size="sm" class="menu-status mt-3"></b-form-select>
            <b-form-select v-model="selected" :options="options_for_actions" size="sm" class="menu-actions mt-3"></b-form-select>
    </div>
      <div class="full__menu-form-button">
        <b-button variant="primary">Поиск</b-button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      selected: null,
      options_for_race: [
        { value: null, text: 'Рейс' },
        { value: 'a', text: 'Это первая опция' },
        { value: 'b', text: 'Выбранная опция' },
        { value: { C: '3PO' }, text: 'Эта опция со значением объекта' },
        { value: 'd', text: 'Эта одна отключена', disabled: true }
      ],
      options_for_car: [
        { value: null, text: 'ТС' },
        { value: 'a', text: 'Это первая опция' },
        { value: 'b', text: 'Выбранная опция' },
        { value: { C: '3PO' }, text: 'Эта опция со значением объекта' },
        { value: 'd', text: 'Эта одна отключена', disabled: true }
      ],
      options_for_free: [
        { value: null, text: 'Свободно' },
        { value: 'a', text: 'Это первая опция' },
        { value: 'b', text: 'Выбранная опция' },
        { value: { C: '3PO' }, text: 'Эта опция со значением объекта' },
        { value: 'd', text: 'Эта одна отключена', disabled: true }
      ],
      options_for_status: [
        { value: null, text: 'Статус рейса' },
        { value: 'a', text: 'Это первая опция' },
        { value: 'b', text: 'Выбранная опция' },
        { value: { C: '3PO' }, text: 'Эта опция со значением объекта' },
        { value: 'd', text: 'Эта одна отключена', disabled: true }
      ],
      options_for_actions: [
        { value: null, text: 'Действия' },
        { value: 'a', text: 'Это первая опция' },
        { value: 'b', text: 'Выбранная опция' },
        { value: { C: '3PO' }, text: 'Эта опция со значением объекта' },
        { value: 'd', text: 'Эта одна отключена', disabled: true }
      ],
    }
  }
}
</script>

<style scoped>
.full__menu {
  margin-top: 10px;
  display: block;
  height: 100%;
}
.full__menu-header {
  display: flex;
  align-items: center;
  background-color: var(--sidecolorsecond);
  height: 55px;
  margin: 0 15px 0 15px;
  padding-left: 15px;
  box-shadow: 0px 0px 10px 1px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
}
.full__menu-header h2 {
  align-items: center;
  font-weight: normal;
  font-size: 20px;
}
.full__menu-form {
  height: 250px;
  margin: 15px;
  background-color: var(--sidecolorsecond);
  box-shadow: 0px 0px 10px 1px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  padding: 15px 15px;
}

.menu-input {
  width: 200px;
  height: 35px;
  border-radius: 4px;
  border: 1px solid grey;
  margin-left: 1px;
  padding: 0 3px 0 3px;
  color: grey;
}

.full__menu-form-types {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.menu-race, .menu-car, .menu-time, .menu-actions, .menu-actions, .menu-status, .menu-free {
  width: 250px;
  align-items: center;
  height: 25px;
  border: none;
  border-bottom: 1px solid grey;
  padding: 0 3px 0 3px;
  color: grey;
}

.full__menu-form-button {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 40px;
}
</style>