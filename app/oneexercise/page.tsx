import OneExerciseLogo from "@/components/custom_ui/oneexercise-logo"

export default function OneExercise() {
  return (
      <main>
        <header 
          aria-label="Page header"
          className="flex items-center p-16"
        >
          <OneExerciseLogo  full />
        </header>
      </main>
  )
}