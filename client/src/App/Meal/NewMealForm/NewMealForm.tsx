import React, {useEffect, useState} from 'react';
import FormTitle from "./FormTitle";
import InputImage from "./InputImage";
import InputDate from "./InputDate";
import MealTypeRadio from "./MealTypeRadio";
import {Button, Container, makeStyles} from "@material-ui/core";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

const useStyles = makeStyles({
  formButtons: {
    display: "flex",
    justifyContent: "right"
  }
})

const NewMealForm = (props: { handleClose: Function }) => {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [img, setImg] = useState<string>('')
  const [date, setDate] = useState<Date>(new Date())
  const [mealType, setMealType] = useState<string>('')
  
  useEffect(() => {
    const updateTitle = () => {
      const dateYear = date.getFullYear().toString()
      const dateMonth = (date.getMonth() + 1).toString().padStart(2, '0')
      const dateDate = date.getDate().toString().padStart(2, '0')
      
      let titleMealType = ''
      if (mealType === 'lunch') titleMealType = '점심'
      else if (mealType === 'dinner') titleMealType = '저녁'
      
      setTitle(`${dateYear}${dateMonth}${dateDate} ${titleMealType}급식`)
    }
    updateTitle()
  }, [date, mealType])
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Bug: 이미지 업로드후 업로드된 이미지 변경할 때 아무것도 선택안하고 종료시 에러
    event.target.files ?
      setImg(URL.createObjectURL(event.target.files[0])) :
      setImg('')
  };
  
  const handleDateChange = (date: MaterialUiPickersDate)  => {
    date ?
      setDate(date) :
      setDate(new Date())
  }
  
  const handleMealTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value ?
      setMealType(event.target.value) :
      setMealType('')
  }
  
  return (
    <Container>
      <form id="mealForm" encType="multipart/form-data">
        {/*/!*제목*!/*/}
        <FormTitle title={title}/>
        
        {/*사진*/}
        <InputImage onChange={handleImageChange} file={img}/>
        
        {/*날짜*/}
        <InputDate date={date} onChange={handleDateChange}/>
        
        {/*/!*식사 종류 (점심/저녁)*!/*/}
        <MealTypeRadio selected={mealType} onChange={handleMealTypeChange}/>
        
        {/*/!*메뉴명*!/*/}
        {/*TODO: add InputText & AddButton*/}
        
        {/*/!*간식*!/*/}
        {/*TODO: add InputText & AddButton*/}
      
      </form>
      
      <div className={classes.formButtons}>
        <Button onClick={() => props.handleClose()}>취소</Button>
        <Button color="primary">확인</Button>
      </div>
    </Container>
  );
};

export default NewMealForm;
