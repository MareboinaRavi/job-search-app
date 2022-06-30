const questions = {
   English: [
        {
            questionText: 'What is called Job Seeker?',
            answerOptions: [
                { answerText: 'The Person who is doing a Job', isCorrect: false },
                { answerText: 'The Person who is Hiring for a Job', isCorrect: false },
                { answerText: 'The Person who is Looking for a Job', isCorrect: true },
                { answerText: 'All the Above', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is called Recruiter?',
            answerOptions: [
                { answerText: 'The Person who is Looking for a Job', isCorrect: true },
                { answerText: 'The Person who is doing a Job', isCorrect: false },
                { answerText: 'The Person who is Hiring for a Job', isCorrect: false },
                { answerText: 'All the Above', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is Resume?',
            answerOptions: [
                { answerText: 'a formal document that a job applicant creates to itemize their qualifications for a position', isCorrect: true },
                { answerText: 'a formal document that a job applicant creates to Unnecessary personal information', isCorrect: false },
                { answerText: 'a formal document that a job applicant creates to Details about your hobbies and interests', isCorrect: false },
                { answerText: 'a formal document that a job applicant creates to Inaccuracies about your qualifications or experience', isCorrect: false },
            ],
        },
    
        {
            questionText: 'What is ShortList?',
            answerOptions: [
                { answerText: 'You have cleared the round of interviews and finally only salary negotiation is left.', isCorrect: false },
                { answerText: 'Carefully choose as being the best or most suitableb', isCorrect: false },
                { answerText: 'You have selected among other candidate profile based upon the type of skills that you have mentioned in the resume', isCorrect: true },
                { answerText: 'The number of people which recieves the final call for the job are the selected ones.', isCorrect: false },
            ],
        },
    
        {
            questionText: 'Who is the Head in Recruitment?',
            answerOptions: [
                { answerText: 'HR', isCorrect: false },
                { answerText: 'FM', isCorrect: true },
                { answerText: 'TL', isCorrect: false },               
                { answerText: 'CPO', isCorrect: false },
            ],
        },
        {
            questionText: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
            answerOptions: [
                { answerText: '7', isCorrect: false },
                { answerText: '12', isCorrect: false },
                { answerText: '13', isCorrect: false },
                { answerText: '10', isCorrect: true },
            ],
        },
        {
            questionText: 'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?',
            answerOptions: [
                { answerText: '20', isCorrect: false },
                { answerText: '22', isCorrect: true },
                { answerText: '23', isCorrect: false },
                { answerText: '26', isCorrect: false },
            ],
        },
        {
            questionText: 'Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?',
            answerOptions: [
                { answerText: '25', isCorrect: true },
                { answerText: '22', isCorrect: false },
                { answerText: '24', isCorrect: false },
                { answerText: '26', isCorrect: false },
            ],
        },
        {
            questionText: 'Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?',
            answerOptions: [
                { answerText: '14', isCorrect: false },
                { answerText: '24', isCorrect: false },
                { answerText: '21', isCorrect: true },
                { answerText: '23', isCorrect: false },
            ],
        },
        {
            questionText: 'Look at this series: 1.5, 2.3, 3.1, 3.9, ... What number should come next?',
            answerOptions: [
                { answerText: '4.2', isCorrect: false },
                { answerText: '4.4', isCorrect: false },
                { answerText: '5.1', isCorrect: false },
                { answerText: '4.7', isCorrect: true },
            ],
        },
        {
            questionText: 'How many of the following numbers are divisible by 132 ? 264, 396, 462, 792, 968, 2178, 5184, 6336',
            answerOptions: [
                { answerText: '5', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '4', isCorrect: true },
                { answerText: '7', isCorrect: false },
            ],
        },
        {
            questionText: 'Ten new television shows appeared during the month of September. Five of the shows were sitcoms, three were hour-long dramas, and two were news-magazine shows. By January, only seven of these new shows were still on the air. Five of the shows that remained were sitcoms.?',
            answerOptions: [
                { answerText: 'At least one of the shows that was cancelled was an hour-long drama.', isCorrect: true },
                { answerText: 'Only one of the news-magazine shows remained on the air.', isCorrect: false },
                { answerText: 'Only one of the hour-long dramas remained on the air.', isCorrect: false },
                { answerText: 'Television viewers prefer sitcoms over hour-long dramas.', isCorrect: false },
            ],
        },
        {
            questionText: 'On weekends, Mr. Sanchez spends many hours working in his vegetable and flower gardens. Mrs. Sanchez spends her free time reading and listening to classical music. Both Mr. Sanchez and Mrs. Sanchez like to cook.?',
            answerOptions: [
                { answerText: 'Mr. Sanchez does not like classical music.', isCorrect: false },
                { answerText: 'Mrs. Sanchez cooks the vegetables that Mr. Sanchez grows.', isCorrect: false },
                { answerText: 'Mrs. Sanchez enjoys reading nineteenth century novels.', isCorrect: false },
                { answerText: 'Mr. Sanchez enjoys planting and growing vegetables.', isCorrect: true },
            ],
        },
        {
            questionText: 'Tim commute never bothered him because there were always seats available on the train and he was able to spend his 40 minutes comfortably reading the newspaper or catching up on paperwork. Ever since the train schedule changed, the train has been extremely crowded, and by the time the doors open at his station, there is not a seat to be found.?',
            answerOptions: [
                { answerText: 'Tim would be better off taking the bus to work.', isCorrect: false },
                { answerText: 'Tims commute is less comfortable since the train schedule changed.', isCorrect: true },
                { answerText: 'Many commuters will complain about the new train schedule.', isCorrect: false },
                { answerText: 'Tim will likely look for a new job closer to home.', isCorrect: false },
            ],
        },
        {
            questionText: 'SCD, TEF, UGH, __, WKL',
            answerOptions: [
                { answerText: 'CMN', isCorrect: false },
                { answerText: 'VIJ', isCorrect: true },
                { answerText: 'UJI', isCorrect: false },
                { answerText: 'IJT', isCorrect: false },
            ],
        },
          {
            questionText: 'B2CD, ___, BCD4, B5CD, BC6D',
            answerOptions: [
                { answerText: 'B2C2D', isCorrect: false },
                { answerText: 'B2C3D', isCorrect: false },
                { answerText: 'BCD7', isCorrect: false },
                { answerText: 'BC3D', isCorrect: true },
            ],
        },
        {
            questionText: 'Indias first medical city Indrayani Medicity to be set up in which state?',
            answerOptions: [
                { answerText: 'Tamil Nadu', isCorrect: false },
                { answerText: 'Maharashtra', isCorrect: true },
                { answerText: 'Kerala', isCorrect: false },
                { answerText: 'Gujarat', isCorrect: false },
            ],
        },
        {
            questionText: '0.0169 x ? = (1.3)^2',
            answerOptions: [
                { answerText: '10', isCorrect: false },
                { answerText: '100', isCorrect: true },
                { answerText: '1000', isCorrect: false },
                { answerText: 'None of these', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the average of first five multiples of 12?',
            answerOptions: [
                { answerText: '36', isCorrect: true },
                { answerText: '38', isCorrect: false },
                { answerText: '40', isCorrect: false },
                { answerText: '42', isCorrect: false },
            ],
        },
        {
            questionText: 'Pointing to a photograph of a boy Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
            answerOptions: [
                { answerText: 'Brother', isCorrect: false },
                { answerText: 'Uncle', isCorrect: false },
                { answerText: 'Cousin', isCorrect: false },
                { answerText: 'Father', isCorrect: true },
            ],
        },
        {
            questionText: 'Deepak said to Nitin, "That boy playing with the football is the younger of the two brothers of the daughter of my fathers wife." How is the boy playing football related to Deepak?',
            answerOptions: [
                { answerText: 'Son', isCorrect: false },
                { answerText: 'Brother', isCorrect: true },
                { answerText: 'Cousin', isCorrect: false },
                { answerText: 'Brother-in-law', isCorrect: false },
            ],
        },
        {
            questionText: 'Pointing to a woman, Abhijit said, "Her granddaughter is the only daughter of my brother." How is the woman related to Abhijit?',
            answerOptions: [
                { answerText: 'Sister', isCorrect: false },
                { answerText: 'Grandmother', isCorrect: false },
                { answerText: 'Mother-in-law', isCorrect: false },
                { answerText: 'Mother', isCorrect: true },
            ],
        },
        {
            questionText: 'Sandeep walks 60m to the east, then he turns left and walks for 50 m, then turns right and went 70 m and then turns right again and went 50 m. How far was Sandeep from the starting point?',
            answerOptions: [
                { answerText: '70 m', isCorrect: false },
                { answerText: '130 m', isCorrect: true },
                { answerText: '90 m', isCorrect: false },
                { answerText: '50 m', isCorrect: false },
            ],
        },
        {
            questionText: 'Raju walks 80 ms towards south. Then, turns to his right & starts walking straight till he completes another 80 ms. Then, again turning to his left he walks for 60 metres. He then turns to his left & walks for 80 metres. How far is he from his initial position?',
            answerOptions: [
                { answerText: ' 140 meters', isCorrect: true },
                { answerText: '120 metres', isCorrect: false },
                { answerText: '20 metre', isCorrect: false },
                { answerText: '60 metres', isCorrect: false },
            ],
        },
        {
            questionText: '(112 x 5^4) = ?',
            answerOptions: [
                { answerText: '67000 ', isCorrect: false },
                { answerText: '77200 ', isCorrect: false },
                { answerText: ' 70000 ', isCorrect: true },
                { answerText: '76500 ', isCorrect: false },
            ],
        },
        {
            questionText: ' You have all come well prepared. I __ you to pass this exam. ',
            answerOptions: [
                { answerText: 'wish', isCorrect: false },
                { answerText: 'except', isCorrect: false },
                { answerText: 'hope', isCorrect: false },
                { answerText: 'expect', isCorrect: true },
            ],
        },
        {
            questionText: 'Tourists always enjoyed __ the setting Sun in the Darjeeling Hills. ',
            answerOptions: [
                { answerText: 'watching', isCorrect: true },
                { answerText: 'seeing', isCorrect: false },
                { answerText: ' to watch', isCorrect: false },
                { answerText: ' in seeing', isCorrect: false },
            ],
        },
        {
            questionText: 'The cost of __ is rising rapidly in this city. ',
            answerOptions: [
                { answerText: 'living', isCorrect: true },
                { answerText: 'existing', isCorrect: false },
                { answerText: 'being', isCorrect: false },
                { answerText: 'surviving', isCorrect: false },
            ],
        },

        {
            questionText: 'Anti COVID Drug 2-DG has been developed by which organization?',
            answerOptions: [
                { answerText: 'DRDO', isCorrect: false },
                { answerText: 'ISRO', isCorrect: false },
                { answerText: 'DGCI', isCorrect: false },
                { answerText: 'CDIR', isCorrect: true },
            ],
        },
        {
            questionText: 'The sum of even numbers between 1 and 31 is:',
            answerOptions: [
                { answerText: '6', isCorrect: false },
                { answerText: '240', isCorrect: true },
                { answerText: '512', isCorrect: false },
                { answerText: '28', isCorrect: false },
            ],
        },
    ]
} 
    
    // n = 5 to export 5 question
    export default (n = 30) =>
    Promise.resolve(questions.English.sort(() => 0.5 - Math.random()).slice(0, n));
    