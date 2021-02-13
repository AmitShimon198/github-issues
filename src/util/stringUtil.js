


export const extractImage = (text) => {
    const imageTag = '![image]';
    const res = [];
    const splitByImages = text.split(imageTag);

    let uiComponents = [];

    for (let index = 0; index < splitByImages.length; index++) {

        const value = splitByImages[index];
        if (!value || !value.trim())
            continue;

        if (value.startsWith('(http')) {

            const imageTextArr = value.replace(["("], "").split(")");
            const imageUrl = imageTextArr[0];
            const nextTextToAdd = imageTextArr[1];
            uiComponents.push({
                type: "image",
                value: imageUrl
            });
            if (nextTextToAdd && nextTextToAdd.trim()) {
                uiComponents.push({
                    type: "text",
                    value: nextTextToAdd,
                })
            }

        } else {
            uiComponents.push({
                type: "text",
                value,
            });
        }
    }
    return uiComponents;
}
