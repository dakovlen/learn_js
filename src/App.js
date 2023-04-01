import React, { Component } from 'react'; //подключаю компонент из Реакта 
import './App.css';

//Как пропс можно передавать и фунцию.
//Нейминг пропсы очень важен для дальнейшей разработки, чем понятнее называю, тем удобнее с ней работать в будущем. 
//Называть надо так, что бы понимать что лежит в нутри компонента.
//Свойство "key" нужно для определения уникальности компонента. 
//(что бы Реакт видел нужно ли перерендеривать компонент или нет, менялось ли в нем что-то)

class WhoAmI extends Component { //создаю компонент с именем WhoAmI
  constructor(props) { //принимаю свойства которые придут с компонентов <WhoAmI></WhoAmI>
    super(props)//ключевое слово супер
    this.state = {//
      yaers: 27,//
      text: "+++",//
      position: ''

    }
  }
//в фунцию setState передается только один аргумент state (текущее на данный момент состояние). Функция возвращает другой обьект.
// обернуть в () означает вызвать, заменить слово return
  nextYear = () => {
    this.setState (state => ({
      yaers: state.yaers + 1 
    }))
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() { //отвечает за вывод чего-то на странице
    const { name, surname, link } = this.props
    const {yaers, position} = this.state
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, 
          surname - {surname}, 
          age - {yaers}, 
          position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="Joan" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Nest" link="google.com" />
    </div>
  );
}

export default App;
