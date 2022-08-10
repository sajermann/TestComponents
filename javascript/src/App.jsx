import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Loading } from '@sajermann/ui-react';
import '@sajermann/ui-react/index.css';

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

  function delay(delayMs) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), delayMs);
    });
  }

  async function handle() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
	}

  return (
    <div className="App">
    <Button
				disabled={isLoading}
				colorStyle="Success"
				id="bruno"
				type="button"
				onClick={handle}
				withFeedback={{
					isLoading,
					inSuccess: {
						setSuccess,
						success,
					},
					inFailed: {
						setFailed,
						failed,
					},
				}}
			>
				Clique aqui
			</Button>
			<Loading />
    </div>
  )
}

export default App
