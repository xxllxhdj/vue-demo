<template>
    <div class="state-view">
        <div class="test-card">
            <h4>组件1</h4>
            <test-state-1></test-state-1>
        </div>
        <div class="test-card">
            <h4>组件2</h4>
            <test-state-2></test-state-2>
        </div>
    </div>
</template>

<script>
    import TestState1 from '../components/TestState1';
    import TestState2 from '../components/TestState2';

    export default {
        components: {
            TestState1,
            TestState2
        }
    }
</script>
