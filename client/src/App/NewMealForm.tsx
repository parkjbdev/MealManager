import React from 'React'

interface NewMealFormState {

}

function Image() {
	return (
		<div className="input my-1">
			<img id="previewImg" className="mx-auto d-block img-fluid rounded" style="padding: 10px;"
				 alt="Meal Image Preview"/>
			<input id="mealImg" className="form-control" type="file" name="mealImg"
				   accept="image/*" onChange="loadImageFile(event)" required/>
		</div>
	)
}

function Date() {
	return (
		<div className="input-group my-1">
			<label htmlFor="mealDate" className="input-group-text">날짜 선택</label>
			<input id="mealDate" type="date" className="form-control" onChange="onDateChanged()"
				   name="mealDate" required/>
		</div>
	)
}

function MealType() {
	return (
		<div id="selectMealType" className="input-group my-1">
			<span className="form-label input-group-text" style="margin: 0;">식사 종류</span>
			<div className="btn-group form-control" role="group"
				 aria-label="Basic radio toggle button group" aria-required="true">
				<input type="radio" className="btn-check" name="mealType" id="mealTypeLunchRadio"
					   autoComplete="off" value="lunch" onClick="onMealTypeChecked(this.value)"
					   required/>
				<label className="btn btn-outline-primary" htmlFor="mealTypeLunchRadio">점심</label>

				<input type="radio" className="btn-check" name="mealType" id="mealTypeDinnerRadio"
					   autoComplete="off" value="dinner" onClick="onMealTypeChecked(this.value)"
					   required/>
				<label className="btn btn-outline-primary" htmlFor="mealTypeDinnerRadio">저녁</label>
			</div>
		</div>
	)
}

function MealMenu() {
	return (
		<div className="my-1">
			<div id="menus"></div>
			<div className="d-grid gap-2 my-1">
				<button type="button" className="btn btn-outline-primary" onClick="newMenu()">
					메뉴 추가
				</button>
			</div>
		</div>
	)
}

function MealSnack() {
	return (
		<div className="my-1">
			<!-- snack names -->
			<div id="snacks" className=""></div>
			<div className="d-grid gap-2 my-1">
				<button type="button" className="btn btn-outline-primary" onClick="newSnack()">
					간식 추가
				</button>
			</div>
		</div>
	)
}

class NewMealForm extends React.Component<{}, NewMealFormState> {
	render() {
		return (
			<div>
				<form id="mealForm" class="row g-3 needs-validation" enctype="multipart/form-data">
					<Image/>
					<Date/>
					<MealType/>
					<MealMenu/>
					<MealSnack/>
				</form>
			</div>
		)
	}
}