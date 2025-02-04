<template>
    <Background>
        <FlamesAnimation />
        <TextWriter :text="introText" :speed="100" />
    </Background>
</template>

<script>
import Background from '../components/background.vue';
import FlamesAnimation from '../components/flamesAnimation.vue';
import TextWriter from '../components/textWriter.vue';

export default {
    name: 'Introduction',
    components: {
        Background,
        FlamesAnimation,
        TextWriter,
    },
    data() {
        return {
            introText: 'En las profundidades del inframundo, donde las llamas nunca se apagan, un demonio llamado Kael comenzó a sentir algo que nunca antes había conocido...',
        };
    },
};
</script>