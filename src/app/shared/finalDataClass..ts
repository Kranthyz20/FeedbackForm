import { serverData } from 'src/app/shared/serverdata';
import { customData } from '../shared/customdatajson';

export class processData {

    customDataJson: customData = new customData();

    process(userFeedback, average): customData {
        console.log("Under process of collecting survey dat");
        this.customDataJson.perId = sessionStorage.getItem('perid');

        let survey1: serverData = new serverData();
        let survey2: serverData = new serverData();
        let survey3: serverData = new serverData();
        let survey4: serverData = new serverData();
        let survey5: serverData = new serverData();
        let survey6: serverData = new serverData();
        let survey7: serverData = new serverData();
        let survey8: serverData = new serverData();
        let survey9: serverData = new serverData();
        let survey10: serverData = new serverData();

        survey1.setQuestion('1. Delivers on time, meets Scheduled Commitments');
        survey1.setAnswer(userFeedback['ques1']);
        survey1.setRating(userFeedback['rating1']);
        this.customDataJson.surveyList.push(survey1);

        survey2.setQuestion('2. Provides Solution/ Service that meets expectations');
        survey2.setAnswer(userFeedback['ques2']);
        survey2.setRating(userFeedback['rating2']);
        this.customDataJson.surveyList.push(survey2);

        survey3.setQuestion('3. Delivers Documentation that meets expectations');
        survey3.setAnswer(userFeedback['ques3']);
        survey3.setRating(userFeedback['rating3']);
        this.customDataJson.surveyList.push(survey3);

        survey4.setQuestion('4. Possesses Technical expertise to meet your business requirements');
        survey4.setAnswer(userFeedback['ques4']);
        survey4.setRating(userFeedback['rating4']);
        this.customDataJson.surveyList.push(survey4);

        survey5.setQuestion('5. Ensures ready accessibility of Key personnel');
        survey5.setAnswer(userFeedback['ques5']);
        survey5.setRating(userFeedback['rating5']);
        this.customDataJson.surveyList.push(survey5);

        survey6.setQuestion('6. Responds quickly to Queries/ Complaints/ Issues/ Emergencies');
        survey6.setAnswer(userFeedback['ques6']);
        survey6.setRating(userFeedback['rating6']);
        this.customDataJson.surveyList.push(survey6);

        survey7.setQuestion('7. Proactively manages Engagement Risks');
        survey7.setAnswer(userFeedback['ques7']);
        survey7.setRating(userFeedback['rating7']);
        this.customDataJson.surveyList.push(survey7);

        survey8.setQuestion('8. Collaborates effectively to accomplish Mutual Goals');
        survey8.setAnswer(userFeedback['ques8']);
        survey8.setRating(userFeedback['rating8']);
        this.customDataJson.surveyList.push(survey8);

        survey9.setQuestion('9. Maintaining KEDB / SOP');
        survey9.setAnswer(userFeedback['ques9']);
        survey9.setRating(userFeedback['rating9']);
        this.customDataJson.surveyList.push(survey9);

        survey10.setQuestion('10. Team Feedback (Offshore & Onsite)');
        survey10.setAnswer(userFeedback['ques10']);
        survey10.setRating(userFeedback['rating10']);
        this.customDataJson.surveyList.push(survey10);

        this.customDataJson.optionalComment = userFeedback['OptionalComments'];

        this.customDataJson.aggregate = average;

        return this.customDataJson;


    }

}