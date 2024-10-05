
export interface Feature {
  name: string;
  description: string;
  src: string;
}

export const oneexerciseFeatures: Feature[] = [
{
name: 'FREE',
description: 'OneExercise\'s core features are free and will always remain so.',
src: '/videos/free.mp4'
},
{
name: 'No Signup Required!',
description: 'OneExercise works directly in your browser, eliminating the need for downloads or sign-ups. It automatically saves your workouts and exercises in your browser. You can download it as a PWA or simply open your browser and start tracking your workouts.',
src: '/videos/pwa.mp4'
},
{
name: 'Works Offline',
description: 'Designed with offline functionality in mind, OneExercise auto-saves to your browser, allowing you to use it even without an internet connection.',
src: '/videos/offline.mp4'
},
{
name: 'Export & Import',
description: 'Easily back up your progress or switch browsers by exporting and importing your workouts and exercises.',
src: '/videos/importExport.mp4'
},
{
name: 'Stats',
description: 'OneExercise compares each new set to the previous workout, providing instant color-coded feedback along with additional stats to help you track your progress.',
src: '/videos/stats.mp4'
},
{
name: 'Custom Exercises',
description: 'OneExercise includes a short list of preset core exercises, and you can create your own list of exercises to track what matters most to you.',
src: '/videos/customExercises.mp4'
},
{
name: 'Dark Mode',
description: 'Choose the color mode that best suits your environment, or allow it to follow your system’s color mode automatically.',
src: '/videos/dark.mp4'
},
{
name: 'And more...',
description: 'OneExercise is an ongoing project, so expect new features to be added regularly.',
src: '/videos/andMore.mp4'
}
];
export const oneExerciseContent: Feature[] = [
{
name: 'Intro',
description: `Hello! My name is Mostafa Lotfy, an indie app maker. I used to track my workouts manually or through apps that offered basic history.
\nI like to start slowl and gradually build up my progress, reviewing each workout to see how many reps or how much weight I used previously.
\nSo, I created OneExercise, a minimal workout tracker that provides instant feedback for each set while also giving quick access to the full history and some additional simple stats. This way, I can aim to improve one of these stats with each workout.
\nIn this quick guide, I will show you how to use OneExercise to easily track your workouts.`,
src: ''
},
{
name: 'The Calendar',
description: 'The calendar marks all the days when you have added at least one workout. \nYou can also navigate to any day by selecting it.',
src: '/videos/OneExercise-calendar.mp4'
},
{
name: 'Add a New Workout',
description: 'Navigate to the date you want to add a workout (by default, it is set to today). \nClick on the `Add Workout` button. \nSelect one exercise for your workout. \nOneExercise is designed as a single exercise workout tracker (each workout consists of one exercise).',
src: '/videos/add-new-OneExercise-workout.mp4'
},
{
name: 'Check the History',
description: 'Before starting your first set, you might want to check the history to determine how many reps to aim for. \nJust click on the history tab, and you\'ll find a list of all the days you had a workout for the currently selected exercise.',
src: '/videos/check-OneExercise-workout-history.mp4'
},
{
name: 'Add a New Set',
description: 'Simply input your reps and weight for each set and press "Add set." It will be added to your sets list for this workout. \nYou will also see if you\'ve improved over the previous set from the last time you worked out this exercise.',
src: '/videos/add-new-OneExercise-set.mp4'
},
{
name: 'Edit/Delete a Set',
description: 'By pressing on any set in your current set list, you can modify its values and then press update. \nAlso, a delete button will appear allowing you to remove the selected set. \nYou can press on the set again to deselect it after finishing editing.',
src: '/videos/edit-or-delete-OneExercise-workout-set.mp4'
},
{
name: 'Check Quick Workout Stats',
description: 'Press on the stats button in your sets list to view some additional simple stats, which are color-coded based on the last workout. \nYou might want to try to improve on these stats.',
src: '/videos/view-OneExercise-workout-quick-stats.mp4'
},
{
name: 'Update Workout Info',
description: `You can click on the info tab to change the date of the current workout you are adding or to change the exercise entirely. \nIf you modify the workout\'s information without adding a new set, a confirmation message will prompt you to save your changes.`,
src: '/videos/edit-OneExercise-workout-info.mp4'
},
{
name: 'Workouts Autosave',
description: 'Each time you add a set, the workout is saved or updated. \nSo if you\'ve already added your sets, your workout is already saved. You can safely navigate back or close the app without losing any data.',
src: '/videos/OneExercise-workouts-autosaves.mp4'
},
{
name: 'Add a New Exercise',
description: 'Navigate to the `Exercises` tab. \nThen click on the `Add Exercise` button. \nProvide a unique name for your exercise; you cannot add an exercise with a name that already exists in your Exercise list. \nSelect the things you want to track for this exercise (reps, weight, distance, time). \nFinally, press the save button, and the exercise will be added to your list. \nIf you change your mind about adding a new exercise, simply click on the back button and nothing will be saved.',
src: '/videos/how-to-add-a-new-exercise-in-OneExercise-app.mp4'
},
{
name: 'Edit an Exercise',
description: 'While on the `Exercises` page , click on the `...` (options) button next next to the exercise you want to edit. \nSelect the `Edit Exercise` from the options menu. \nEdit the name of the exercise or its track option, then press on `update`.\nIf you decide not to edit an exercise after all, just click on the back button and nothing will be saved.',
src:'/videos/edit-OneExercise-exercises.mp4'
},
{
name:'The Stats Tab',
description: `Navigate to the stats page by clicking on the stats tab in the bottom navigation. \nYou will find start and end dates for the period you want statistics for. \nBy default, the start date is set to the date of your very first workout, and today is set as the end date; however, you can customize this period if desired. \nCurrently, you will see some simple yet useful overall statistics, including the total duration of the selected period, the number of saved workouts, the number of exercises used during workouts in that period, your current streak, your best streak, and the number of days with at least one workout compared to the total number of days in this period.`,
src:'/videos/check-your-OneExercise-overall-stats.mp4'
},
{
name:'Switch Color Mode',
description: 'Open the side navigation menu. You can quickly switch between dark/light mode using the toggle switch. \nOr go into settings and select from a dropdown menu. \nIf you choose system mode, OneExercise will follow your browser\'s color settings.',
src:'/videos/switch-OneExercise-app-color-mode.mp4'
},
{
name:'Back Up Your Workouts & Exercises',
description: 'Open the side navigation menu. Go to `Settings` and press `Backup your workouts and exercises to a file on your device`; this will save a file on your device that looks like this: `OneExercise🔥2024-06-12.json`. \nYou can later use this file for importing (perhaps into a new browser) by pressing `Import workouts and exercises from a file on your device` and selecting this file from your device. \nThis process will save/load all of your workouts and exercises.',
src:'/videos/backup-OneExercise-workouts-&-exercises.mp4'
},
{
name:'Start Over',
description: 'If for any reason you\'d like to delete all of your progress and start fresh, head over to settings and press `Fresh Start`. \nBe cautious—this action will delete all of your workouts and exercises; consider exporting your data first.',
src:'/videos/delete-all-OneExercise-workouts-&-exercises.mp4'
},
{
name:'Reset Presets',
description: 'If you\'ve deleted any preset exercises included with OneExercise but wish to have them back without affecting other workouts and exercises, go into settings and press `Restore Preset Exercises`.',
src:'/videos/restore-OneExercise-deleted-presets.mp4'
},
{
name:'Ask for Help',
description:`Do you have any questions about OneExercise? \nIf anything is confusing or frustrating, or if you have feedback or feature requests, feel free to contact me via email.`,
src:''
}
];