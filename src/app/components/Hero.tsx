export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Interactive street-finding game</h1>

          <div className="py-6 flex flex-col gap-2">
            <p>
            Enhance your street-finding skills through clues such as stores nearby, adjacent streets, etc.</p>

            <p className="text-primary italic">
            Which famous street often involves UK government affairs in media?
            </p>

            <div className="flex gap-3">
              <button className="btn btn-neutral">Downing Street</button>
              <button className="btn btn-neutral">Coronation Street</button>
              <button className="btn btn-neutral">Norfolk Street</button>
            </div>
            
          </div>



          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}