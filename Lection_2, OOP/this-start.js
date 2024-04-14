// Работа с this
const checkThis = function () {
  console.log(this);
};

checkThis(); // Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, ...} // здесь ссылаемся на глобальный объект, а ниже
//на сам объект

/////

// создадим объект
const checkThisInObject = {
  testProperty: true,
  checkThis: function () {
    console.log(this);
  },
};

checkThisInObject.checkThis(); // {testProperty: true, checkThis: f} - здесь ссылка на сам объект
