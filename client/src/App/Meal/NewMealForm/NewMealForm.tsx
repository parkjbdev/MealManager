import React, {useEffect, useState} from 'react';
import noimg from "../../../resource/img/no-image.png"
import FormTitle from "./FormTitle";
import {InputImage, PreviewImage} from "./ImageComponent";
import InputDate from "./InputDate";
import MealTypeRadio from "./MealTypeRadio";

const NewMealForm = () => {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState<string>(noimg)
  const [date, setDate] = useState<Date>(new Date())
  const [mealType, setMealType] = useState<string>('')
  
  useEffect(() => {
    updateTitle()
  }, [date, mealType])
  
  const updateTitle = () => {
    const dateYear = date.getFullYear().toString()
    const dateMonth = (date.getMonth() + 1).toString().padStart(2, '0')
    const dateDate = date.getDate().toString().padStart(2, '0')
    
    let titleMealType = ''
    if (mealType == 'lunch') titleMealType = '점심'
    else if (mealType == 'dinner') titleMealType = '저녁'
    
    setTitle(`${dateYear}${dateMonth}${dateDate} ${titleMealType}급식`)
  }
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files ?
      setImg(URL.createObjectURL(event.target.files[0])) :
      setImg(noimg)
  };
  
  const handleDateChange = (date: Date) => {
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
    <div>
      <form id="mealForm" encType="multipart/form-data">
        {/*/!*제목*!/*/}
        <FormTitle title={title}/>
        
        {/*/!*사진*!/*/}
        <PreviewImage file={img}/>
        <InputImage onChange={handleImageChange}/>
        
        {/*날짜*/}
        <InputDate date={date} onChange={handleDateChange}/>
        
        {/*/!*식사 종류 (점심/저녁)*!/*/}
        <MealTypeRadio selected={mealType} onChange={handleMealTypeChange}/>
        
        {/*/!*메뉴명*!/*/}
        {/*TODO: add InputText & AddButton*/}
        
        {/*/!*간식*!/*/}
        {/*TODO: add InputText & AddButton*/}
      
      </form>
    </div>
  );
};

export default NewMealForm;