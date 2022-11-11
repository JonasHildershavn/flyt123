import LinkButton from "../link-button/link-button";
import {Dispatch, SetStateAction} from 'react';


interface SaveFeedbackProps {
    setShowSaveFeedback: Dispatch<SetStateAction<boolean>>
}

const SaveFeedback: React.FC<SaveFeedbackProps> = ({ setShowSaveFeedback }) => {

     function showSelf() {
        setShowSaveFeedback(current=>!current)
     }

    return (
        <div className="save-feedback">
            <div className="save-feedback__container">
                <h2 className="save-feedback__header">🎉 Interessen din er oppdatert! 🎉</h2>
                <div className="save-feedback__info">
                    <p>☑️ Informasjonen blir nå sendt til de rette folkene som skal se hvor de kan plassere deg</p>
                    <p>✉️ Du blir kontaktet på mail eller Slack i løpet av kort tid!</p>
                    <p>✏️ Da kan når som helst oppdatere interessen din</p>
                </div>
                <div className="save-feedback__btns">
                    <LinkButton text="Gå til hovedsiden" className="save-feedback__btn" href="/"/>
                    
                    <div onClick={showSelf}>
                        <LinkButton text="Fortsett å redigere" className="save-feedback__btn"/>
                    </div>
                </div>
            </div>
        </div>    
    )
};

export default SaveFeedback;