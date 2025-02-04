<template>
    <Background :isDark="false">
        <lightParticles />
        <TextWriter :text="encounterText" :speed="80" :isDark="false" />
    </Background>
</template>

<script>
import Background from '../components/background.vue';
import TextWriter from '../components/textWriter.vue';
import lightParticles from '../components/lightParticles.vue';

export default {
    name: 'Encounter',
    components: {
        Background,
        TextWriter,
        lightParticles,
    },
    data() {
        return {
            encounterText: 'En un pequeño pueblo rodeado de bosques, Kael conoció a Lira. Su luz era tan brillante que iluminó incluso las sombras más profundas de su ser...',
        };
    },
};
</script>