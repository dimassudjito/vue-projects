<template>
  <div class="form ma-4">
      <h1>Slot</h1>
      <Card>
          This is child component
      </Card>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
    name: "TestSlot",
    components: {
        Card
    }

}
</script>
