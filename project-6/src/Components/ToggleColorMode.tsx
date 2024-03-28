import React from 'react'
import {  Button, useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      </header>
    )
}

export default ToggleColorMode