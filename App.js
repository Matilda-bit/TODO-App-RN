import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
        todoInput: '',
        todos: [
          { id: 0, title: 'Take out the trash', done: false },
          { id: 1, title: 'Cook dinner', done: false }
        ]
    }
  }

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length +1,
      title: this.state.todoInput,
      done: false

    });

    this.setState({
      todos,
      todoInput: ''
    });
    
  }

render(){
  const statusbar = (Platform.OS == 'android') ? <View style={styles.statusbar}></View> : <View></View>;

  return (
    <View style={styles.container}>
        {statusbar}

        <Header title="TODO APP"/>

        <InputBar 
            addNewTodo={ () => this.addNewTodo()}
            textChange={todoInput => this.setState({ todoInput })} 
            todoInput={this.state.todoInput}
            
          />

        <FlatList 
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ ({item, index}) => {
            return(
              <TodoItem todoItem={item} />
            )
          } }
        />
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusbar: { 
    backgroundColor: '#FFCE00',
    height: 24
  }
});
