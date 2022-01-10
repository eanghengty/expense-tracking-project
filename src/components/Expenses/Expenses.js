import React , {useState} from 'react'
import './Expenses.css'
import ExpenseItem from "./ExpenseItem"
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
function Expenses(props){
    const [filteredYear,setFilteredYear]= useState('2020')
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
        console.log(selectedYear)
      }
      
    return(
        <Card className="expenses">
         <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>   
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}> </ExpenseItem> 
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}> </ExpenseItem> 
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}> </ExpenseItem> 
        </Card>)
}

export default Expenses