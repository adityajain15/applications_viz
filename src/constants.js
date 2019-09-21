const QuestionTypes = {
    LongText: 'long_text',
    ShortText: 'short_text',
    YesNo: 'yes_no',
    MultipleChoice: 'multiple_choice',
    GeoCoordinate: 'geocoordinate'
}
  
export const Questions = [
// {
//   question: 'What do you like to do to unwind?',
//   type: QuestionTypes.MultipleChoice,
//   answers: [
//     'Video games',
//     'TV',
//     'Hanging out with friends',
//     'Drinking or drugs',
//     'None of the above'
//   ]
// },
{
    question: 'Where are you from?',
    type: QuestionTypes.GeoCoordinate
},
{
    question: 'What does the landscape of your home look like?',
    type: QuestionTypes.LongText
},
{
    question: 'Do you play video games to unwind?',
    type: QuestionTypes.YesNo
},

]
  