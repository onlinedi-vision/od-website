variable "GIT_BRANCH" {}
variable "BUILD_NUMBER" {}

function "tag" {
    params = [branch, build_number]
    result = "v${split("/", branch)[length(split("/", branch)) - 1]}-${build_number}"
}

target "release" {
    target = "runtime"

    tags = ["registry.onlinedi.vision:5000/od-website:${tag(GIT_BRANCH, BUILD_NUMBER)}"]
}
