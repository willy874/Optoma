<script type="text/javascript">

    <?php //若不回傳JSON要補空字串 ?>;
    window.jsonData = {};
    window.jsonData.node = <?php include 'data/node.json'; ?>;
    window.jsonData.home = <?php include 'data/home.json'?>;
    window.jsonData.ourbraud = <?php include 'data/ourbraud.json'; ?>;
    window.jsonData.about = <?php include 'data/about.json'; ?>;
    window.jsonData.applications = <?php include 'data/applications.json'; ?>;
    window.jsonData.design = <?php include 'data/design.json'; ?>;
    window.jsonData.innovation = <?php include 'data/innovation.json'; ?>;
    window.jsonData.knowledge = <?php include 'data/knowledge.json'; ?>;
    window.jsonData.social = <?php include 'data/social.json'; ?>;
    window.jsonData.detail = <?php include 'data/detail.json'; ?>;
    window.static = {
    keyword: {
        knowledge: 'All',
        design: 'design',
        innovation: 'All',
    }
}
    
</script>