import {
	IonCol,
	IonLabel,
	IonRow,
	IonSegment,
	IonSegmentButton,
} from "@ionic/react"
import React from "react"

const InputControl: React.FC<{
	selectedValue: "mkg" | "ftlbs"
	onSelectValue: (value: 'mkg' | 'ftlbs') => void
}> = (props) => {
    
    const inputChangeHandler = (event: CustomEvent) => {
        props.onSelectValue(event.detail.value)
    }
	return (
		<IonRow>
			<IonCol>
				<IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
					<IonSegmentButton value="mkg">
						<IonLabel>m/Kg</IonLabel>
					</IonSegmentButton>
					<IonSegmentButton value="ftlbs">
						<IonLabel>ft/lbs</IonLabel>
					</IonSegmentButton>
				</IonSegment>
			</IonCol>
		</IonRow>
	)
}

export default InputControl
