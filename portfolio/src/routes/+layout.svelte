<script>
    import "../app.css";
    import Navbar from '../components/navbar.svelte';
    import Pagebase from '../components/pagebase.svelte';
    import Pagetop from '../components/pagetop.svelte';
</script>




  
<Pagebase>
</Pagebase>

<Navbar>
</Navbar>

<Pagetop>
</Pagetop>

<div class={`absolute`}>
<slot>
</slot>
</div>


