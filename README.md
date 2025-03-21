# GYK #5 - Angular Change Detection, Observables, Signals

## Change Detection

    - How does Angular CD work?
    - The problem with `zone.js`

## Observables (https://rxjs.dev/guide/overview)

    - why observables?
    - what are observables?
        - observable dispatcher
        - observable listener
    - subjects (Subject, BehaviorSubject, ReplaySubject)
    - subscriptions and unsubscriptions (unclosed example).
    - AsyncPipe

### Task #1 - HttpClient + Subject

Papildykite `TaskService` Subject naudojimu.

1. Pakeiskite `TaskService` taip, kad komponento viduje būtų galima rašyti `this.tasks$ = this.#service.tasks$` ir jūs visada gautumėte atnaujintą `tasks` sąrašą.
2. Naudokite `Subject` serviso viduje - jo turinį atnaujinkite `getTasks` metodu.
3. Naudokite `switchMap` pipe'able operatorių, kad pakviestumėte `getTasks` po naujo task pridėjimo servise.
4. (Optional) Sukūrę naują servisą, kuris ima duomenis iš `https://randomuser.me/api`, naudokite `combineLatest` ir pridėkite "užduoties kūrėją" prie kiekvienos užduoties.
