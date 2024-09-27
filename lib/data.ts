
export interface Feature {
  name: string;
  description: string;
  src: string;
}
export const oneexerciseFeatures: Feature[] = [
  {
    name: 'FREE',
    description: 'OneExercise core features are free and will always be.',
    src: '/videos/free.mp4'
  },
  {
    name: 'No Sign up!',
    description: 'OneExercise works in your browser. No need to download it or sign up. It automatically saves your workouts and exercises in your browser. You can download it as a PWA. Or just open your browser and start tracking your workouts.',
    src: '/videos/pwa.mp4'
  },
  {
    name: 'Works Offline',
    description: 'Offline-first. Auto-saves to your browser. You can still use it even if you don\'t have an internet connection.',
    src: '/videos/offline.mp4'
  },
  {
    name: 'Export & Import',
    description: 'Back up your progress, or switch browsers, by exporting and importing your workouts and exercises.',
    src: '/videos/importExport.mp4'
  },
  {
    name: 'Stats',
    description: 'OneExercise compares each new set to the very previous workout and gives you instant color coded feedback. And gives you other stats to track your progress.',
    src: '/videos/stats.mp4'
  },
  {
   name: 'Custom Exercises',
   description: 'OneExercise comes with a short list of preset core exercises. You can also create your own list of Exercises and decide what you want to track for each exercise',
   src: '/videos/customExercises.mp4'
  },
  {
    name: 'Dark Mode',
    description: 'Choose the color mode that best suits your environment. Or just let it follow your system’s color mode.',
    src: '/videos/dark.mp4'
  },
  // {
  //   name: 'PRAVIVACY FOCUSED',
  //   description: 'OneExrcise does not track your activity, does not collect your data, and does not sell your data.',
  // src: '/privacyFocused.mp4'
  // },
  {
    name: 'And more...',
    description: 'OneExercise is an active project so expect new features to pop up',
    src: '/videos/andMore.mp4'
  }
]

export const oneExerciseContent: Feature[] = [
  {
    name: 'Intro',
    description: `Hey there, my name is Mostafa Lotfy (an indie app maker). I used to track my workouts manually or through apps that provided basic history.
    \nI like to start slow and build up my progress, reviewing each workout to see how many reps or how much weight I used previously.
    \nSo, I created a minimal workout tracker, OneExercise, that gives instant feedback for each set, while also providing quick access to the full history and some additional simple stats. This way, I can try to improve one of these stats with each workout.
    \nIn this quick guide, I will show you how to use OneExercise to easily track your workouts.`,
    src: ''
  },
  {
    name: 'The Calander',
    description: `The calander marks all the days you have added at least one workout. \nYou can also navigate to any day you want by selecting it.`,
    src: '/videos/OneExercise-calendar.mp4'
  },
  {
    name: 'Add a new workout',
    description: 'Go to the date you want to add a workout at (by default its set to today). Click on the `Add a new workout` button. \nSelect one exercise for your workout. OneExercise is a single exercise workout tracker (each workout is made up of one exercise).',
    src: '/videos/add-new-OneExercise-workout.mp4'
  },
  {
    name: 'Check the history',
    description: 'You might want to check the history before you start your first set to know how many reps to aim for, for example. \nJust click on the history tab and you\'ll find a list of all the days you had a workout for the current selected exercise.',
    src: '/videos/check-OneExercise-workout-history.mp4'
  },
  {
    name: 'Add a new set',
    description: `Just add your reps and weight for each set and press on Add set. It'll be added to your sets list for this workout. \nAnd you'll see if you've improved over the previous set of the last time you workedout this exercise.`,
    src: '/videos/.mp4'
  },
  {
    name: 'Edit/Delete a set',
    description: `By pressing on any set in your current set list, you can change its current values then press update. Also a del button will appear to delte the selected set. You can press on the set again to deselect it after you finsih editing.`,
    src: '/videos/edit-or-delete-OneExercise-workout-set.mp4'
  },
  {
    name: 'Check quick workout stats',
    description: `Press on the stats button in you sets list to have a look at some extra simple stats, also color coded based on the last workout. You might want to improve on these if you're a nerd or if you fail to improve in other ways.`,
    src: '/videos/view-OneExercise-workout-quick-stats.mp4'
  },
  {
    name: 'Update workout info',
    description: `You can press on the info tab to change the date of the current workout you're adding, or change the workout's exercise entirely.`,
    src: '/videos/edit-OneExercise-workout-info.mp4'
  },
  {
    name: 'Workouts autosave',
    description: `Each time you add a set the workout is saved or updated. So if you're already added your sets your workout is already saved. And you can safely navigate back or close the app.`,
    src: '/videos/OneExercise-workouts-autosaves.mp4'
  },
  {
    name: 'Add a new exercise',
    description: `While at one of the main pages (Workouts/Exercises/Stats), click on the \`Add\` button. 
    
    \nThen click on the \`Add Exercise\` Button. Add a name for your exercise, the name must be unique, you can’t add an exercise with a name that already exists in your Exercise list. 
    
    \nIf you change your mind and decide not to add a new exercise, jut click on the back button and nothing will be saved.`,
    src: '/videos/add-new-exercise-in-OneExercise-app.mp4'
  },
  {
    name: 'Edit an exercise',
    description: `While at one of the main pages (Workouts/Exercises/Stats), click on the \`Add\` button. 
    
    \nThen click on the \`Add Exercise\` Button. Add a name for your exercise, the name must be unique, you can’t add an exercise with a name that already exists in your Exercise list. 
    
    \nIf you change your mind and decide not to add a new exercise, jut click on the back button and nothing will be saved.`,
    src: '/videos/edit-OneExercise-exercises.mp4'
  },
  {
    name: 'The stats tab',
    description: `Head to the stats page by pressing on the stats tab in the bottom nav. You'll find a start and end dates for the period you want your stats for. By default the start date is set to the date of your very first workout, and the end date is today, however you can get stats for a custom period if you want. \nCurrently you get simple stats...`,
    src: '/videos/check-your-OneExercise-overall-stats.mp4'
  }
  ,
    {
      name: 'Switch color mode',
      description: `Open the side nav. You can quickly switch to dark/light mode via the switch. Or you can go to the setting and select the mode via drop down. If you select system OneExercise color mode will follow the settings of your browser.`,
      src: '/videos/switch-OneExercise-app-color-mode.mp4'
    }
    ,
      {
        name: 'Back up your workouts & exercises',
        description: `Open the side nav. Go to 'Settings' and press on Export this will save a file that looks like this on your device. You can later use this file to import (prehaps to a new browser) by pressing on the import button and selecting this file from your device. This will save/load all your workouts and exercises.`,
        src: '/videos/backup-OneExercise-workouts-&-exercises.mp4'
      }
      ,
        {
          name: 'Start over',
          description: `If for some reason, you wnat to delete all your progress and start with a blank slate. You could just head to setting and press on Reset. Careful this will delete all your workouts and exercises. Perhaps you should export your data first.`,
          src: '/videos/delete-all-OneExercise-workouts-&-exercises.mp4'
        }
        ,
          {
            name: 'Reset Presets',
            description: `If for some reason you've edited your preset exercises that come with OneExercise yet you would like to revert to the default options without deleting your other workouts and exercises. You can head to settings, then press on Reset presets.`,
            src: '/videos/restore-OneExercise-deleted-presets.mp4'
          }
          ,
            {
              name: 'Ask for help',
              description: `Have any questions about OneExercise?
              \n If you find anything confusing, annoying, or have any feedback, or feature requests, feel free to contact me by email.`,
              src: ''
            }
]