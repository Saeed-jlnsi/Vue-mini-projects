export const fruitMixin = {
    data() {
        return {
            filterText: '',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon']
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }      
    },
    created() {
        console.log('mixin created');
    }
};