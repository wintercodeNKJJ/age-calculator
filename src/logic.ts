import { useState,useEffect } from "react"

interface Result{
  day:number,
  month:number,
  year:number
}

export const useLogic = ()=>{
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  const [result, setResult] = useState<Result>({
    day:0,month:0,year:0
  })

  const calculate = ()=>{
    setResult(()=>{
      let tdate = new Date()

      let dy = tdate.getDate() - day
      let mths = tdate.getMonth()+1 - month
      let yrs = tdate.getFullYear() - year
      let sresult = {day:0,month:0,year:0}

      if (dy < 0){
        if(mths < 0){
          sresult.year = yrs - 1
          sresult.month = mths + 12
          sresult.day = dy + 30
        }else if(mths === 0){
          sresult.year = yrs -1
          sresult.month = mths-1 + 12
          sresult.day = dy + 30
        }else{
          sresult.year = yrs
          sresult.month = mths-1
          sresult.day = dy + 30
        }
      }else{
        if(mths < 0){
          sresult.year = yrs - 1
          sresult.month = mths + 12
          sresult.day = dy
        }else{
          sresult.year = yrs
          sresult.month = mths
          sresult.day = dy
        }
      }
      return sresult
    })
    console.log(result)
  }

  return { calculate, setDay, setMonth, setYear, result }
}