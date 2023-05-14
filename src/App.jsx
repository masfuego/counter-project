import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Container, Button, Col, Row, Stack} from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Container className='moremargin'>
    {count}
    </Container>
    <br></br>
    <Container>
      <Stack gap={2}>
        <Button onClick={() => setCount (count + 1)}>Counter-project</Button>
        <Button variant='outline-secondary' onClick={() => setCount(count - 1)}>Reduce counter</Button>
      </Stack>
    </Container>
    
    
    </>
  )
}

export default App
