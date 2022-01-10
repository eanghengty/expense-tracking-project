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
         {props.items.map((expense)=> <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}

        </Card>)
}

export default Expenses