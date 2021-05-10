<template>
<div>
    <RegisterMain/>
    <RegisterConfirm/>
</div>
</template>

<script>
import RegisterMain from '../components/RegisterMain'
import RegisterConfirm from '../components/RegisterConfirm'

export default {
    name: 'Register',
    components: {
        RegisterMain,
        RegisterConfirm
    }

}
</script>

<style>

</style>