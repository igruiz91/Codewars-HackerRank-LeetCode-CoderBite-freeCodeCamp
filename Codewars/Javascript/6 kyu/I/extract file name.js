class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.match(/\_(\w|-)+\.\w+/)[0].slice(1)
    }
}




console.log(extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'));