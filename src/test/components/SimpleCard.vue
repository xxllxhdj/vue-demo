<template>
    <div class="simple-card">
        <div>
            <slot name="header"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>
