greek_alphabet = (
    'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta',
    'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu',
    'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma',
    'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega')

def greek_comparator(lhs, rhs):
    return -0.0 if greek_alphabet.index(lhs) < greek_alphabet.index(rhs) else +0.0 if greek_alphabet.index(lhs) > greek_alphabet.index(rhs) else 0




print(greek_comparator("alpha", "beta"))
print(greek_comparator("beta", "beta"))
print(greek_comparator("beta", "alpha"))
