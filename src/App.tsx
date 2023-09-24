import { useState } from 'react';
import './App.css'
import { users } from './data/data.json'
import { Card } from './shared/ui/Card/ui/Card';
import { HStack, VStack } from './shared/ui/Stack';
import { Table } from './shared/ui/Table/ui/Table';
import { Button } from './shared/ui/Button/ui/Button';

function App() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <VStack gap={'32'}>
      <Button
        toggle={toggle}
        setToggle={setToggle}
      />

      <HStack gap={'32'}>
        {
          toggle 
            ? (
                users.map((user) => (
                  <Card 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    mail={user.mail}
                    number={user.number}
                  />
                ))
              )
            : <Table users={users} />
        }
      </HStack>

    </VStack>
  )
}

export default App
