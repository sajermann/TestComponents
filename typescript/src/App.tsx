import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Drawer } from '@sajermann/ui-react';
import '@sajermann/ui-react/index.css';

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	const [isOpenTop, setIsOpenTop] = useState(false);
	const [isOpenLeft, setIsOpenLeft] = useState(false);
	const [isOpenRight, setIsOpenRight] = useState(false);
	const [isOpenFull, setIsOpenFull] = useState(false);

  function delay(delayMs: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), delayMs);
    });
  }

  async function handle() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
		await delay(1500);
		setSuccess(false);
	}

  return (
    <div className="App">
    <Button
				disabled={isLoading}
				colorStyle="Primary"
				id="bruno"
				type="button"
				onClick={handle}
				withFeedback={{
					loadingOptions:{
						isLoading
					},
					successOptions: {
						success,
					},
					failedOptions: {
						failed,
					},
				}}
			>
				Clique aqui
			</Button>

			<Button
				colorStyle="Primary"
				id="bruno"
				type="button"
				onClick={() => setIsOpenLeft(true)}
			>
				Open Left
			</Button>
			<Button
				colorStyle="Secondary"
				id="bruno"
				type="button"
				onClick={() => setIsOpenRight(true)}
			>
				Open Right
			</Button>
			<Button
				colorStyle="Success"
				id="bruno"
				type="button"
				onClick={() => setIsOpenFull(true)}
			>
				Open Full
			</Button>
			<Button
				colorStyle="Warning"
				id="bruno"
				type="button"
				onClick={() => setIsOpenTop(true)}
			>
				Open Top
			</Button>
			<Drawer
				openFrom="left"
				percentage={10}
				isOpen={isOpenLeft}
				setIsOpen={e => setIsOpenLeft(e)}
			>
				<div>left</div>
			</Drawer>
			<Drawer
				openFrom="right"
				percentage={30}
				isOpen={isOpenRight}
				setIsOpen={e => setIsOpenRight(e)}
				disableBackdrop
			>
				<div>left</div>
			</Drawer>
			<Drawer
				openFrom="bottom"
				percentage={10}
				isOpen={isOpenFull}
				disableEsc
				setIsOpen={e => setIsOpenFull(e)}
			>
				<div>
					<Button
						colorStyle="Success"
						id="ss"
						type="button"
						onClick={() => setIsOpenFull(false)}
					>
						Close Full
					</Button>
				</div>
			</Drawer>
			<Drawer
				openFrom="top"
				disableClickOnBackdrop
				percentage={90}
				isOpen={isOpenTop}
				setIsOpen={e => setIsOpenTop(e)}
			>
				<div style={{ backgroundColor: 'black', height: '100%' }}>
					<Button
						colorStyle="Success"
						id="ss"
						type="button"
						onClick={() => setIsOpenTop(false)}
					>
						Close Full
					</Button>
				</div>
			</Drawer>
		</div>
  )
}

export default App
