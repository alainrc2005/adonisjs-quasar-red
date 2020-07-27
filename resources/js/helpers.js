import * as resources from './resources'

export function Error(message) {
    this.$q.notify({
        icon: "mdi-clippy",
        color: "negative",
        progress: true,
        message
    });
}

export function Success(message) {
    this.$q.notify({
        icon: "mdi-hand-okay",
        color: "positive",
        progress: true,
        message
    });
}

export function Warning(message) {
    this.$q.notify({
        icon: "mdi-flash-circle",
        color: "accent",
        progress: true,
        message
    });
}

export function sprintf(str, ...args) {
    return str.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

export function ShowRunSpeed($start) {
    let elap = (_.now() - $start) / 1000;
    if (this.dismiss) this.dismiss();
    this.dismiss = this.$q.notify({
        color: "blue-grey-6",
        textColor: "white",
        position: "bottom-left",
        message: `Tiempo de Ejecución: ${elap} segundos...`,
        timeout: 1000,
        progress: true,
    });
}

export function AskForRemove(){
    return this.$q.dialog({
        title: "Confirmación",
        message: resources.mAskNoUndo,
        ok: {color: "negative"},
        cancel: {color: "warning"},
        persistent: true
    });
}
