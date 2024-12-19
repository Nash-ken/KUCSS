<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    const error: number = $page.status;
    const message: string | undefined = $page.error?.message;

    $effect(() => {
        setTimeout(() => {
        goto('/', {replaceState: true});
    }, 5000);
    })
  
</script>


<div class="w-full overflow-hidden items-center flex flex-col">
    <pre class="mx-auto">
     ⢰⠄⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⠹⡀⢠⠙⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⠀⠇⠈⡇⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣸⢰⢰⣀⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢣⢻⣼⣿⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⠉⢣⡀⢱⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⠂⢸⢿⣞⠿⠆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⠌⡇⠀⠿⢇⠀⡇⠀⠀⠀⠀
⠀⠀⠀⡠⠊⠀⡐⠀⠀⠀⠀⠀⠩⡢⡀⠀⠀
⠀⠀⢎⣀⢔⠝⠀⠀⠀⠀⠀⠀⠀⢡⣈⣄⠀
⠀⢸⡿⠙⡫⠀⠀⠀⠀⠀⠀⠀⠀⢥⢍⣿⠂
⠀⠈⡤⣲⠣⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠃⠀
⠀⠀⠰⡀⢆⠀⠀⠀⠀⠀⠀⠀⢀⣌⠀⠀⠀
⠀⣀⡠⡬⠦⠢⢀⡀⠤⠤⠄⠒⠉⠱⠃⠀⠀
⠘⠥⡊⠩⠑⠊⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    </pre>
        
<p>{error}</p>
<p>{message}</p>

</div>
