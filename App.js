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
          { id: 0, title: 'Take out the trash', done: false , textlen: 18 }
        ]
    }
  }

  addNewTodo() {
    let todos = this.state.todos;
    console.log(this.state.todoInput)
    if(this.state.todoInput.length != 0){
      todos.unshift({
        id: todos.length,
        title: this.state.todoInput,
        done: false,
        textlen: this.state.todoInput.length
  
      });
  
      this.setState({
        todos,
        todoInput: ''
      });
      
    }
    }
    

  toggleDone (item){
    let todos = this.state.todos;
    
    todos = todos.map((todo) => {
      if (todo.id === item.id) {
        todo.done = !todo.done;
      }
      
      return todo;
    })
    this.setState({todos});
  }

  removeTodo (item){
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id != item.id)

    this.setState({todos});
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
                  data={ this.state.todos}
                  extraData={this.state}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={ ({item, index}) => {
                    return(
                      <TodoItem 
                        todoItem={item} toggleDone={() => this.toggleDone(item)}
                        removeTodo={() => this.removeTodo(item)}
                      />
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
