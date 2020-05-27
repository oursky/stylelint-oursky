.PHONY: check-rules-are-up-to-date
check-rules-are-up-to-date:
	node ./scripts/print-all-rules.js
	git status | grep "rules"; test $$? -eq 1

.PHONY: check-all-rules-are-considered
check-all-rules-are-considered:
	node ./scripts/check-all-rules-are-considered.js
