
<script>
    
    import "../app.css";
    import Navbar from '../components/navbar.svelte';
    import Pagebase from '../components/pagebase.svelte';
    import Pagetop from '../components/pagetop.svelte';
</script>




  
<Pagebase>
</Pagebase>







<div class={`absolute`}>
<slot>
</slot>
</div>

<Navbar>
</Navbar>


<Pagetop>
</Pagetop>




