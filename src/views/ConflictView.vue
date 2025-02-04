<template>
    <TransitionSection>
    <TextWriter :text="conflictText" :speed="80" :isDark="false" />
  </TransitionSection>
</template>

<script>
import TransitionSection from '../components/transitionSection.vue';
import TextWriter from '../components/textWriter.vue';
//import NavigationArrows from '../components/navigationArrows.vue';


export default {
    name: 'Conflict',
    components: {
        TransitionSection,
        TextWriter,
    },
    data() {
        return {
            conflictText: 'Kael se encontró atrapado entre dos mundos: su naturaleza oscura y el amor que sentía por Lira. ¿Podría un demonio encontrar redención en el amor?',
        };
    },
};
</script>