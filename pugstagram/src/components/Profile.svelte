<!-- Profile.svelte -->
<script>
</script>
<style>
    .Profile-content {
      display: flex;
      align-items: center;
    }
    .Profile-avatar img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .Profile-info {
      margin: 0 0 0 0.5em;
    }
    .Profile-info h2 {
      font-size: 14px;
      color: black;
      margin: 0;
      padding: 0;
    }
    .Profile-info span {
      font-size: 12px;
      font-weight: normal;
    }
  </style>  

<div class="Profile">
    <div class="Profile-content">
        <div class="Profile-avatar">
            <img src="https://media.licdn.com/dms/image/C4E03AQEct6JS87tjqg/profile-displayphoto-shrink_800_800/0/1654195401033?e=2147483647&v=beta&t=Ol_Vpgnbl1wm3OmZQV6JgBciJb6D9J1VhWQ1p7l5U0o" alt="">
        </div>
        <div class="Profile-info">
            <h2>Drekx</h2>
            <span>José Guachun</span>
        </div>
    </div>
</div>