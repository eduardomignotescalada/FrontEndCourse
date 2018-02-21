experience = 10
reward = 15

function reachNextLevel(experience, threshold, reward) {
    if ((experience + reward) >= threshold) {
        return true
    } else {
        return false;
    }
}
