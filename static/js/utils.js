function handleModeType(mode) {
    let type = 'unknown'
    switch (mode.$id.substring(9)) {
        case 'javascript': type = 'JavaScript'; break;
        case 'css': type = 'CSS'; break;
        case 'html': type = 'Hyptertext Markup Language'; break;
    }
    return type
}