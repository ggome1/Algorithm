def solution(genres, plays):
    total_play = {}
    answer = []
    for idx, (genre, play) in enumerate(zip(genres, plays)):
        if genre not in total_play:
            total_play[genre] = []
        total_play[genre].append((play, idx))

    sorted_genres = sorted(
        total_play.items(),
        key=lambda x: sum(play for play, _ in x[1]),
        reverse=True
    )

    for genre, songs in sorted_genres:
        songs.sort(key=lambda x: (-x[0], x[1]))
        for play, idx in songs[:2]:
            answer.append(idx)

    return answer
