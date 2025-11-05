<script lang="ts">
    export type User = {
        name: string;
        age: number;
        gender?: "Male" | "Female";
    };
    let { name, age, gender = "Male" }: User = $props(); // $props rune to declare props
</script>

<div>
    <p>
        Name : {name}
    </p>
    <p>
        Age : {age}
    </p>

    <p>Gender: {gender}</p>
</div>
