$jq(function () {
    $jq('.collapsible legend').click(function () {
        $jq(this).parent().toggleClass('collapsed');
    });
});